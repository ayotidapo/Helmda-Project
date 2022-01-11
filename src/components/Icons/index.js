const Icon = (props) => {
  const { width, height, id } = props;
  return (
    <svg width={width} height={height} {...props}>
      <use xlinkHref={`/icon-sprite.svg#${id}`} />
    </svg>
  );
};
export default Icon;
