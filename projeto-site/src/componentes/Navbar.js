import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import eventBus from './eventBus';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { InputBase } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

function Header(props) {
  const navigate = useNavigate();
 
  const [cartCount, setCartCount] = useState(0);
  const { sections, isLoggedIn, setIsLoggedIn  } = props;
  const [activeSection, setActiveSection] = React.useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    eventBus.dispatchEvent(new Event('logout'));
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    navigate('/');
    setIsLoggedIn(true) 
  };

  const handleProfileMenuClick = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleProfileMenuSelect = (option) => {
    if (option === 'detalhes') {
      // Implement your logic for showing details
      console.log('Show details');
    } else if (option === 'sair') {
      // Implement your logic for logout
      console.log('Logout');
    }

    setProfileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  // ...
  
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
 
  
    

  useEffect(() => {
    // Recupere os itens do carrinho do localStorage e atualize a contagem
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);
  },[]);


  return (
    <React.Fragment>
      <Toolbar sx={{ borderTop: 8, display: 'flex', alignItems: 'center' }}>
          <Typography
            component="h2"
            variant="h3"
            color="inherit"
            align="right"
            noWrap
            sx={{ flex: 1, textAlign: 'center',  marginTop: 8, marginBottom: 3}}
          >
            NOME
          </Typography>
        <ButtonGroup variant="outlined" size="small" sx={{ position: 'absolute', right: 50,  marginTop: 8, marginBottom: 3}}>
        <IconButton onClick={toggleSearch}>
  <SearchIcon />
</IconButton>
{isSearchOpen ? (
  <div style={{ position: 'relative', marginLeft: 'auto', width: '240px' }}>
    <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
      
    </div>
    <InputBase
      placeholder="Pesquisar..."
      style={{ paddingLeft: '40px' }}
      inputProps={{ 'aria-label': 'search' }}
      autoFocus
    />
  </div>
) : null}








          <IconButton onClick={handleProfileMenuClick}>
            <PermIdentityIcon></PermIdentityIcon>
          </IconButton>
          
          <IconButton onClick={() => navigate('/carrinho')}>
          {cartCount === 0 ? ( 
                    <ShoppingBasketIcon />
                  ) : (
                    <Badge color="secondary"  badgeContent={cartCount}>
                <ShoppingBasketIcon />
                </Badge>
                  )}
                  
          </IconButton>
        </ButtonGroup>
        {profileMenuOpen && (
          <FormControl
            sx={{
              position: 'absolute',
              right: 87,
              marginTop: 8,
              marginBottom: 3,
              maxWidth: 'auto',
              border: 'none',
              justifyContent: 'left',
            }}
          >
            <Select
              open={profileMenuOpen}
              onClose={() => setProfileMenuOpen(false)}
              onOpen={() => setProfileMenuOpen(true)}
              defaultValue=""
              onChange={(e) => handleProfileMenuSelect(e.target.value)}
              IconComponent={() => null}
              inputProps={{
              
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
              }}
            >
              <MenuItem value="detalhes" >Detalhes</MenuItem>
              {isLoggedIn ? ( 
                <MenuItem value="sair" onClick={handleLogout}>
                  Sair
                </MenuItem>
              ) : (
                <MenuItem value="entrar" onClick={handleLogin}>
                  Entrar
                </MenuItem>
              )}
            </Select>
          </FormControl>
        )}
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          overflowX: 'auto',
          justifyContent: 'center',
          paddingBottom: 2,
        }}
      >
        <div
          style={{
            justifyContent: 'space-between',
            width: '50%',
            display: 'flex',
            overflowX: 'auto',
          }}
        >
          {sections.map((section, index) => (
            <Link
              color="inherit"
              key={section.title}
              variant="body2"
              align="right"
              href={section.url}
              sx={{
                p: 2,
                flexShrink: 0,
                transition: 'border-color 0.3s ease-in-out',
                cursor: 'pointer',
                textDecoration: 'none',
                textTransform: 'uppercase',
                borderBottom: '2px solid transparent',
                '&:hover': {
                  borderBottomColor: 'black',
                },
              }}
              onClick={() => handleSectionClick(index)}
            >
              {section.title}
            </Link>
          ))}
        </div>
      </Toolbar>
    </React.Fragment>
  );
}



Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default Header;