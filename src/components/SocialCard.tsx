
import Logo from "./Logo.tsx"
import MainButton from "./MainButton.tsx"

type Props = {
    name: string,
    location : string,
}

const SocialCard = ({ name, location }: Props) => {
  return (
    <article className=" flex flex-col gap-10 items-center bg-secondaryBg w-80 h-[600px] p-10 box-border rounded-lg">
        <div className=" h-2/5 flex flex-col gap-2 items-center">
            <Logo />
            <h1 className="text-mText text-xl font-manrope font-semibold tracking-wide ">{name}</h1>
            <p className="text-hText text-xl font-manrope tracking-wider">{location}</p>
        </div>
        <div className="h-3/5 flex flex-col gap-5">
            <MainButton />
        </div>
    </article>
  )
}

export default SocialCard