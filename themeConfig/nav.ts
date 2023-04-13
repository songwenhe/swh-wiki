import { pageRoot } from './constants'
const nav = [
  {
    text: 'test',
    items: [
      { text: 'linux', link: '/linux/index', activeMath: '/linux/' },
      { text: 'nginx', link: '/nginx/index', activeMath: '/nginx/' },
      { text: 'tomcat', link: '/tomcat/index', activeMath: '/tomcat/' },
      { text: 'interview', link: '/interview/index', activeMath: '/interview/' },
      { text: 'mysql', link: '/mysql/index', activeMath: '/mysql/' },
      { text: 'docker', link: '/docker/index', activeMath: '/docker/' },
      { text: 'network', link: '/network/index', activeMath: '/network/' }
    ]
  }
]

const addPrefix = (link: string) => {
  return pageRoot + link
}

const endNav = nav.map((i) => {
  const items = i.items?.map((i) => {
    return {
      ...i,
      link: addPrefix(i.link)
    }
  })
  const hasItems = i.items?.length > 0
  const isLink = i.link?.length > 0
  const baseRes = isLink ? { ...i, link: i.external ? i.link : addPrefix(i.link) } : { ...i }
  return hasItems ? { ...baseRes, items } : { ...baseRes }
})

export default endNav
