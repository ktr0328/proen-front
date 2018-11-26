const development = {
  api: {
    base_url: 'http://localhost:3000'
  }
}
const product = {}
const common = {
  title: 'パズプロ（仮）',
  colors: {
    if: 'green',
    while: 'orange',
    for: 'purple',
    class: 'blue',
    print: 'cyan',
    puts: 'indigo',
    variable: 'lime'
  },
  navigation: {
    views: [
      {
        icon: 'fas fa-home',
        title: 'Home',
        to: { name: 'home' }
      },
      {
        icon: 'fas fa-shapes',
        title: 'About',
        to: { name: 'about' }
      },
      {
        icon: 'fas fa-question',
        title: 'Questions',
        to: { name: 'questions' }
      }
    ]
  }
}

const props = process.env.NODE_ENV === 'development' ? development : product
Object.assign(props, common)

export default props
