import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'md': '768px',
  			'lg': '1000px',
  			'xl': '1258px',
  			'2xl': '1600px',
  			'3xl': '1920px'
  		}
  	},
  	extend: {
  		transform: {
  			'scale-101': 'scale(1.01)'
  		},
  		animation: {
  			floatingLogo: 'floatingLogo cubic-bezier(0.3, 0.4, 0.3, 1) infinite',
  			contactEnvelope: 'contactEnvelope cubic-bezier(0.3, 0.6, 0.3, 1) infinite',
  			contactLogo: 'contactLogo cubic-bezier(0.25, 1, 0.5, 1) infinite',
  			glowPulse: 'glowPulse infinite ease-in-out',
  			floatSpin: 'floatSpin infinite ease-in-out',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				arrowButton: 'arrowButton cubic-bezier(0.3, 0.6, 0.3, 1) infinite',
  		},
  		keyframes: {
  			floatingLogo: {
  				'0%, 100%': {
  					transform: 'translateY(0) scale(1) rotate(0deg)'
  				},
  				'15%': {
  					transform: 'translateY(-3px) scale(1.03) rotate(5deg)'
  				},
  				'30%': {
  					transform: 'translateY(2px) scale(0.98) rotate(-0.6deg)'
  				},
  				'45%': {
  					transform: 'translateY(-2px) scale(1.01) rotate(1deg)'
  				},
  				'60%': {
  					transform: 'translateY(3px) scale(0.95) rotate(-5deg)'
  				},
  				'75%': {
  					transform: 'translateY(-1px) scale(1) rotate(0.3deg)'
  				},
  				'90%': {
  					transform: 'translateY(1px) scale(0.995) rotate(-0.2deg)'
  				}
  			},
  			contactEnvelope: {
  				'0%, 100%': {
  					transform: 'translateY(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				},
  				'15%': {
  					transform: 'translateY(-5px) rotate(3deg) scale(1.04)',
  					opacity: '0.92'
  				},
  				'30%': {
  					transform: 'translateY(3px) rotate(-2deg) scale(0.98)',
  					opacity: '0.98'
  				},
  				'50%': {
  					transform: 'translateY(-4px) rotate(2deg) scale(1.03)',
  					opacity: '0.96'
  				},
  				'70%': {
  					transform: 'translateY(2px) rotate(-1.5deg) scale(1)',
  					opacity: '1'
  				},
  				'85%': {
  					transform: 'translateY(-2px) rotate(1deg) scale(1.02)',
  					opacity: '0.97'
  				}
  			},
  			contactLogo: {
  				'0%, 100%': {
  					transform: 'translateY(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				},
  				'20%': {
  					transform: 'translateY(-2px) rotate(3deg) scale(1.05)',
  					opacity: '0.95'
  				},
  				'35%': {
  					transform: 'translateY(2px) rotate(-2deg) scale(0.98)',
  					opacity: '1'
  				},
  				'50%': {
  					transform: 'translateY(-2px) rotate(1.5deg) scale(1.02)',
  					opacity: '0.98'
  				},
  				'65%': {
  					transform: 'translateY(1px) rotate(-1deg) scale(1)',
  					opacity: '1'
  				},
  				'80%': {
  					transform: 'translateY(-1px) rotate(0.5deg) scale(1.01)',
  					opacity: '0.99'
  				}
  			},
  			glowPulse: {
  				'0%': {
  					boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
  				},
  				'100%': {
  					boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
  				}
  			},
  			floatSpin: {
  				'0%': {
  					transform: 'translateY(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				},
  				'20%': {
  					transform: 'translateY(-3px) rotate(2deg) scale(1.05)',
  					opacity: '0.95'
  				},
  				'40%': {
  					transform: 'translateY(2px) rotate(-2deg) scale(1.08)',
  					opacity: '0.8'
  				},
  				'60%': {
  					transform: 'translateY(-1px) rotate(1deg) scale(1.06)',
  					opacity: '0.9'
  				},
  				'80%': {
  					transform: 'translateY(1px) rotate(-1deg) scale(1.03)',
  					opacity: '0.97'
  				},
  				'100%': {
  					transform: 'translateY(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
				arrowButton: {
  				'0%, 100%': {
  					transform: 'translateX(0) rotate(0deg) scale(1)',
  					opacity: '1'
  				},
  				'15%': {
  					transform: 'translateX(-5px) rotate(3deg) scale(1.04)',
  					opacity: '0.92'
  				},
  				'30%': {
  					transform: 'translateX(3px) rotate(-2deg) scale(0.98)',
  					opacity: '0.98'
  				},
  				'50%': {
  					transform: 'translateX(-4px) rotate(2deg) scale(1.03)',
  					opacity: '0.96'
  				},
  				'70%': {
  					transform: 'translateX(2px) rotate(-1.5deg) scale(1)',
  					opacity: '1'
  				},
  				'85%': {
  					transform: 'translateX(-2px) rotate(1deg) scale(1.02)',
  					opacity: '0.97'
  				}
  			},
  		},
  		screens: {
  			'md': '768px',
  			'lg': '1000px',
  			'xl': '1258px',
  			'2xl': '1600px',
  			'3xl': '1920px'
  		},
  		letterSpacing: {
  			tightest: '-0.05em',
  			tighter: '-0.025em',
  			wider: '0.025em',
  			widest: '0.05em',
  			custom: '1px'
  		},
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)'
  			],
  			montserrat: [
  				'var(--font-montserrat)'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
