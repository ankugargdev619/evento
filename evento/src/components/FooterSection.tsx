interface Links {
    name : string,
    link : string
}

interface FooterSectionProps {
    title : string,
    links : Links[]
}

export default function FooterSection({title , links} : FooterSectionProps) {
    return <div className="text-brand-50">
        <div className="flex text-2xl my-2 md:my-4">{title}</div>
        {links.map((val,_id)=>(
            <div key={_id}><a href={val.link}>{val.name}</a></div>
        ))}
    </div>
}