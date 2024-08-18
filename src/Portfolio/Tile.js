export const Tile = ({name, image, waybackLink}) => {
    return (
        <span>
                            <h4>{name}</h4>
                            <a href={image} target={'_blank'}>
                                <img src={image} width='420px'/>
                            </a><br/>
            {waybackLink &&
                <a href={waybackLink}
                   target={'_blank'}>
                    Wayback Machine
                </a>
            }
        </span>
    )
}