export default defineAppConfig({
 ui: {
    colors: {
      primary: 'yellow',
      secondary: 'cyan'
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-10',
    },
    button: {
      slots: {
        base: ['rounded-none', 'transition-none']
      },
       compoundVariants: [
        {
          color: 'primary',
          variant: 'outline',
          class: 'ring-2 ring-inset ring-primary \
          text-primary-300 bg-primary-500/20 shadow-xs shadow-purple-500 transform \
          transition-shadow transition-translate transition-translate \
          hover:bg-primary-500/30 hover:shadow-md hover:shadow-purple-500/50 hover:-translate-y-1 \
          focus:bg-primary-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary \
          active:bg-primary-500/60 active:text-primary-300 active:shadow-yellow-500/60 active:shadow-md active:-translate-y-0.5 \
          disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
       ],
      variants: { 
        color: {
          primary: 'bg-primary/20',
          secondary: 'bg-cyan-500',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
      }
    },
    link: {
      base: 'font-["Pixelify_Sans",monospace] no-underline transition-all duration-200 focus-visible:outline-primary',
      variants: {
        active: {
          true: 'text-primary',
          false: 'text-white'
        },
        disabled: {
          true: 'cursor-not-allowed opacity-75'
        }
      },
      compoundVariants: [
        {
          active: false,
          disabled: false,
          class: [
            'hover:text-primary',
            'transition-colors'
          ]
        }
      ]
    },
    timeline: {
      slots: {
        root: 'flex gap-1.5',
        item: 'group relative flex flex-1 gap-3',
        container: 'relative flex items-center gap-1.5',
        indicator: 'group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted size-3',
        separator: 'flex-1 rounded-full bg-elevated',
        wrapper: 'bg-white px-5 py-5',
        date: 'text-xs text-black bg-primary px-2 py-0.5 inline-block ml-auto',
        title: 'font-bold text-sm py-2',
        description: 'text-black text-wrap text-xs leading-[1.2rem]'
      },
    }
  }
})