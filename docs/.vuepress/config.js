import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    navbar: [
      {text: '首页', link: '/'},
      {text: '指南', link: '/guide/'},
      {text: 'PC组件文档', link: '/pc/'},
      {text: 'APP组件文档', link: '/app/'},
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsible: true,
          children: ['/guide/README.md', '/guide/started.md']
        }
      ],
      '/app/': [
        {
          text: '列表',
          collapsible: true,
          children: ['/app/List.md']
        },
        {
          text: '筛选控件',
          collapsible: true,
          children: ['/app/DateRangePicker.md']
        },
      ],
    }
  }),
}