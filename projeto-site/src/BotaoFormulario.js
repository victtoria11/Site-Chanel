import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormularioCadastro from './FormularioCadastro'; // Importe o componente do formulário de cadastro
import FormularioEntrar from './FormularioEntrar'; // Importe o componente do formulário de entrar
import  Typography  from '@mui/material/Typography';



const Botao = () => {
    const [mostrarFormularioEntrar, setMostrarFormularioEntrar] = useState(true);
    const [mostrarFormularioCadastro, setMostrarFormularioCadastro] = useState(false);

    const handleMostrarFormularioEntrar = () => {
        setMostrarFormularioEntrar(true);
        setMostrarFormularioCadastro(false);
    };

    const handleMostrarFormularioCadastro = () => {
        setMostrarFormularioCadastro(true);
        setMostrarFormularioEntrar(false);
    };

    return (
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3">CONTA</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <Button
              onClick={handleMostrarFormularioEntrar}
              sx={{
                  mt: 3, mb: 2, borderBottom: mostrarFormularioEntrar ? '3px solid black' : '1px solid #3bbeff',  borderRadius: 0
              }}
          >
              Entrar
          </Button>
          <Button
              onClick={handleMostrarFormularioCadastro}
              sx={{
                  mt: 3, mb: 2, borderBottom: mostrarFormularioCadastro ? '3px solid black' : '1px solid #3bbeff', borderRadius: 0,
              }}
          >
              Cadastrar
          </Button>
          </Box>

            {mostrarFormularioEntrar && <FormularioEntrar />}
            {mostrarFormularioCadastro && <FormularioCadastro />}
        </Box>
    );
};

export default Botao;
