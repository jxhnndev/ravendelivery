import Link from 'next/link'

type Props = {
    links: { 
        id: number, 
        title: string, 
        url: string 
    }[]
  }

const BreadCrumb = ({ links }: Props) => {
  return (
    <nav className="flex">
        <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <Link href="/" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gold cursor-pointer"> Home </Link>
              </div>
            </li>
            {links.map(link => (
            <li key={link.id} className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <Link href={link.url} className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gold cursor-pointer"> {link.title} </Link>
                </div>
              </div>
            </li>
            ))}
        </ol>
    </nav>
  )
}

export default BreadCrumb