import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      to: '/',
      name: 'основное',
    },
    {
      to: '/natalchart',
      name: 'наталка',
    },
    {
      to: '/groups',
      name: 'бестис',
    },
  ];

  const displayList = links.map((link) => {
    return (
      <li>
        <NavLink to={link.to}>{link.name}</NavLink>
      </li>
    );
  });
  return (
    <div className="navbar">
      <ul className="nav-list">{displayList}</ul>
    </div>
  );
};

export default Navbar;
