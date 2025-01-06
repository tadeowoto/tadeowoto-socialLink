
import Logo from "./Logo.tsx"
import MainButton from "./MainButton.tsx"

type Props = {
    name: string,
    location : string,
}

const SocialCard = ({ name, location }: Props) => {
  return (
    <article>
        <div>
            <Logo />
            <h1>{name}</h1>
            <p>{location}</p>
        </div>
        <div>
            <MainButton />
        </div>
    </article>
  )
}

export default SocialCard