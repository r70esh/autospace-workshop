import Slider, { SliderProps } from '@mui/material/Slider'

export const RangeSlider = (props: SliderProps) => (
  <div className="w-full pt-6 pl-2 pr-4">
    <Slider
      valueLabelDisplay="on"
      classes={{
        root: `h-0.5 w-full border-0 `,
        thumb:
          'rounded-none border w-4 h-4 after:active:bg-white/10 after:w-8 after:h-8 after:rounded-none bg-dark-100 hover:shadow-none hover:border-primary-500 hover:bg-dark-50 focus:bg-dark-50',
        track: 'text-gray-800 ',
        rail: 'bg-gray-400',
        valueLabel:
          'text-white rounded-none py-1 px-0.5 text-sm bg-dark-100/80 h-0 w-0',
      }}
      {...props}
    />
  </div>
)
