import React, { useMemo, useEffect } from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import throttle from "lodash/throttle";
import parse from "autosuggest-highlight/parse";

import "./LocationSelect.scss";

const autocompleteService = { current: null };

const LocationSelect = ({ onChange }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }

    if (!autocompleteService.current) {
      return;
    }

    if (inputValue === "") {
      setOptions([]);

      return;
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  return (
    <Autocomplete
      className="LocationSelect"
      getOptionLabel={option =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={x => x}
      options={options}
      autoComplete
      includeInputInList
      disableOpenOnFocus
      renderInput={params => (
        <TextField
          {...params}
          label="miasto/region"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      )}
      onChange={onChange}
      renderOption={option => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map(match => [match.offset, match.offset + match.length])
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className="LocationSelect__location-icon" />
            </Grid>
            <Grid item xs>
              {parts.map((part, index) => (
                <span key={index}>{part.text}</span>
              ))}

              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
};

export default LocationSelect;
