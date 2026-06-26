import styles from './avatar.module.css'
import Image from "next/image";

export const Avatar = ({ name, imageSrc }) => {
    return (
        <ul className={styles.avatar}>
            <li>
                <Image src={imageSrc} width={32} height={32} alt={name} />
            </li>
            <li>
                @{name}
            </li>
        </ul>
    );
};