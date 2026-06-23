
    export const Avatar = (name,imageSrc) => {
        return (
        <ul>
            <li>
                <Image src= {imageSrc}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>

        )
    }