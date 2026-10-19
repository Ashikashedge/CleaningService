import Icon from './Icon';

export default function Brand({ config, className = '', onClick }) {
  const logo = config.logo || {};
  return (
    <a className={`brand ${className}`.trim()} href="#home" aria-label={`${config.companyName} home`} onClick={onClick}>
      <span className="brand-mark">
        {logo.src ? <img src={logo.src} alt="" /> : logo.monogram ? <span className="brand-monogram">{logo.monogram}</span> : <Icon name={logo.icon || 'sparkle'} size={21} />}
      </span>
      {logo.showWordmark !== false && <span>{config.companyName}</span>}
    </a>
  );
}
