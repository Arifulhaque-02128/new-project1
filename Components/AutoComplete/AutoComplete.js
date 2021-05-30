import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

const AutoComplete = ({zoom, center}) => {

    const [mapZoom, setMapZoom] = zoom;
    const [mapCenter, setMapCenter] = center;

    const [address, setAddress] = useState('');

    const handleChange = (value) => {
        setAddress(value)
    }

    const handleSelect = value => {
        geocodeByAddress(value)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              console.log('Success', latLng)
              setMapCenter({lat: latLng.lat, lng: latLng.lng})
              setMapZoom(18)
              })
          .catch(error => console.error('Error', error));
    }

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="text-center my-4">
                <input
                    {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                    })}
                />
                <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                    const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                    console.log(suggestion);
                    // inline style for demonstration purpose
                    const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                    <div
                        {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                        })}
                    >
                        <span>{suggestion.description}</span>
                    </div>
                    );
                })}
                </div>
            </div>
            )}
        </PlacesAutocomplete>
    );
};

export default AutoComplete;