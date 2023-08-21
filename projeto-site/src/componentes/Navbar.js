import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



function Header(props) {
  const { sections } = props;
  const [activeSection, setActiveSection] = React.useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };


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
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <IconButton >
            <PermIdentityIcon></PermIdentityIcon>
          </IconButton>
          <IconButton>
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </IconButton>
        </ButtonGroup>
      </Toolbar>

      <Toolbar
              component="nav"
              variant="dense"
              sx={{ borderBottom: 1,
                borderColor: 'divider',
                overflowX: 'auto',
                justifyContent: 'center',
                paddingBottom: 2,
              }}
            >
              <div style={{
                justifyContent: 'space-between',
                width: '50%',
                display: 'flex',
                overflowX: 'auto',
              }}>

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
                    borderBottom: activeSection === index ? 2 : 0,
                    borderColor: 'primary.main',
                    transition: 'border-color 0.3s ease-in-out',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    textTransform: 'uppercase',

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