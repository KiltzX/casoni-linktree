import Social from "../../components/Social";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <a id="profilePicture" href="#popup">
        <Image src="/midia_distrito.png" width={500} height={500} />
      </a>

      <div id="userName">
        Distrito Casoni
      </div>

      <div id="links">
        <Social link={"https://instagram.com/jovensdofarol"} icon={"instagram"} name={"Instagram - Light House"}></Social>
        <Social link={"https://instagram.com/jovens_casoni"} icon={"instagram"} name={"Instagram - Jovens Casoni"}></Social>
        <Social link={"https://instagram.com/jovens_interlagos"} icon={"instagram"} name={"Instagram - Base The Chosen Interlagos"}></Social>
      </div>
    </div>
  );
}
