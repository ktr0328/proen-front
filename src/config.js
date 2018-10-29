const development = {
  api: {
    base_url: 'http://localhost:3000'
  }
}
const product = {}
const common = {
  title: 'パズプロ（仮）',
  colors: {
    if: 'yellow',
    while: 'orange',
    for: 'purple',
    class: 'blue',
    print: 'cyan'
  }
}

const props = process.env.NODE_ENV === 'development' ? development : product
Object.assign(props, common)

export default props
