import Image from "next/image";

export default function Social(props) {
  return (
    <a class="link" href={props.link} target="_blank">
      <i class="fab fa-github">
        &nbsp;
      </i>
      {props.name}
    </a>
  );
}
