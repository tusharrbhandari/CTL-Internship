import Calculator from './Calculator';


export default {
  title: 'Component/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
};

export const Default = {
  args: {},
};

export const DarkTheme = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Documentation
Default.parameters = {
  docs: {
    description: {
      component: `
# EMI Calculator Component

A responsive EMI (Equated Monthly Installment) calculator that helps users calculate their monthly loan payments based on:
- Loan amount
- Duration
- Interest rate

## Features
- Interactive slider for loan amount selection
- Duration selection with visual feedback
- Real-time EMI calculation
- Responsive design
- Modern UI with illustrations

## Usage

\`\`\`jsx
import Calculator from './Calculator';

function App() {
  return <Calculator />;
}
\`\`\`
      `,
    },
  },
};