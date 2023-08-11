import { ReactNode } from 'react'

type sectionProps = {

    title?: string,
    children: ReactNode,
}

export const Section = ({ children , title = "My Subheading"}:
sectionProps) =>{
    return(
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}