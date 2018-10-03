import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import './Stepper.css';


const styles = theme => ({
  root: {
    width: '97%',
    textAlign: 'left',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Ayer', 'Hace 1 día', 'Hace 2 dias', 'Hace 3 dias'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `¡Tu pedido fue entregado!`;
    case 1:
      return `El correo ya salió hacia tu domicilio
              En el transcurso del día el correo va a estar visitando tu domicilio
              para entregarte el pedido. ¡Asegurate que haya alguien para recibirlo!`;
    case 2:
      return `En los próximos días llega tu pedido
              El correo ya agendó una visita para los próximos días.
              Deberían visitarte pronto.`;
    case 3:
      return `Tu pedido está listo para prepararse
              Ya tenemos todo lo que necesitamos para empezar a preparar tu pedido.
              Tu orden incluye los siguientes productos:`;
    default:
      return 'No hay tracking disponible para este pedido.';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    console.log('Handle next');
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    console.log('Handle back');
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step className="step" key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography className="step-content">{getStepContent(index)}</Typography>
                  <Typography className="step-delivery-time">A las: 19:23</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                        >
                            Volver
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={`${classes.button} step-button`}
                        >
                            {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                        </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>¡Completaste todos los pasos!</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Empezar de vuelta
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
