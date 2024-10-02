import { transform } from '@svgr/core'

const svgCode = `
<svg xmlns="./Logo.svg">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`
const jsCode = await transform(
    svgCode,
    { icon: true },
    { componentName: 'SiteLogo' },
  )
