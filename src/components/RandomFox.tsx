interface Props {
  image: string;
  alt: string;
  key: number;
}
const RandomFox = (props: Props): JSX.Element => {
  return <img className="w-1/4 rounded-lg" src={props.image} alt={props.alt} />;
};
export { RandomFox };
