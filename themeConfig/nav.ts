import { pageRoot } from './constants'
const nav = [
  {
    text: 'linux',
    items: [
      { text: 'linux', link: '/linux/index', activeMath: '/linux/' },
      { text: 'interview', link: '/interview/index', activeMath: '/interview/' },
      { text: 'network', link: '/network/index', activeMath: '/network/' }
    ]
  },
  {
    text: 'docker',
    items: [
      { text: 'docker', link: '/docker/index', activeMath: '/docker/' },
      { text: 'k8s', link: '/k8s/index', activeMath: '/k8s/' }
    ]
  },
  {
    text: 'web服务',
    items: [
      { text: 'nginx', link: '/nginx/index', activeMath: '/nginx/' },
      { text: 'tomcat', link: '/tomcat/index', activeMath: '/tomcat/' }
    ]
  },
  {
    text: 'MySQL',
    items: [{ text: 'mysql', link: '/mysql/index', activeMath: '/mysql/' }]
  }
  // {
  //   text: 'web',
  //   items: [
  //     { text: 'linux', link: '/linux/index', activeMath: '/linux/' },
  //     { text: 'nginx', link: '/nginx/index', activeMath: '/nginx/' },
  //     { text: 'tomcat', link: '/tomcat/index', activeMath: '/tomcat/' },
  //     { text: 'interview', link: '/interview/index', activeMath: '/interview/' },
  //     { text: 'mysql', link: '/mysql/index', activeMath: '/mysql/' },
  //     { text: 'docker', link: '/docker/index', activeMath: '/docker/' },
  //     { text: 'network', link: '/network/index', activeMath: '/network/' }
  //   ]
  // }
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
