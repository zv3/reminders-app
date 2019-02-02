import PropTypes from 'prop-types';

export const DAYS_OF_THE_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const COLORS = [
  { label: 'Red', value: '#F44336' },
  { label: 'Pink', value: '#E91E63' },
  { label: 'Purple', value: '#9C27B0' },
  { label: 'Deep Purple', value: '#673AB7' },
  { label: 'Indigo', value: '#3F51B5' },
  { label: 'Blue', value: '#2196F3' },
  { label: 'Glue', value: '#1976d2' },
  { label: 'Light Blue', value: '#03A9F4' },
  { label: 'Cyan', value: '#00BCD4' },
  { label: 'Teal', value: '#009688' },
  { label: 'Green', value: '#4CAF50' },
  { label: 'Light Green', value: '#8BC34A' },
  { label: 'Lime', value: '#CDDC39' },
  { label: 'Yellow', value: '#FFEB3B' },
  { label: 'Amber', value: '#FFC107' },
  { label: 'Orange', value: '#FF9800' },
  { label: 'Deep Orange', value: '#FF5722' },
  { label: 'Brown', value: '#795548' },
  { label: 'Blue Gray', value: '#607D8B' },
  { label: 'Gray', value: '#9E9E9E' },
  { label: 'Black', value: '#000000' },
];

export const REMINDER_PROP_TYPES = {
  reminder: PropTypes.shape({
    title: PropTypes.string.isRequired,
    dt: PropTypes.instanceOf(Date).isRequired,
    color: PropTypes.string,
  }),
};

export const DEFAULT_COLOR_VALUE = COLORS[2].value;
