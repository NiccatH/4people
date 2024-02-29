import noUiSlider from '../../vendor/nouislider';

const initSlider = () => {
  const slider = document.querySelector('.range');

  if (!slider) {
    return;
  }
  const rangeValue = document.querySelector('[data-range-value]');
  const rangeInput = document.querySelector('[data-range-input]');

  const mySlider = noUiSlider.create(slider, {
    start: [75],
    connect: 'lower',
    step: 1,
    range: {
      'min': 0,
      'max': 100,
    },
    format: {
      to: (value) => {
        return Math.round(value);
      },
      from: (value) => {
        return value;
      },
    },
  });

  mySlider.on('update', (values, handle) => {
    const value = values[handle];
    rangeValue.innerHTML = value + '%';
    rangeInput.value = value;
  });
};

export {initSlider};
