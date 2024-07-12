import css from "./OwnerFilter.module.css";

export default function OwnerFilter({ value, onFilter }) {
  return (
    <div className={css.wrapper}>
      Filter by owner
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
