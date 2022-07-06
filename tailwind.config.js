module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/Background/butterfly_background.svg')",
				'footer-pattern': "url('/Background/butterfly_group.svg')",
				'RM-pattern': "url('/Background/RM_bg.svg')",
			  },
			  backgroundSize: {
				'auto': 'auto',
				'cover': 'cover',
				'contain': 'contain',
				'50%': '50%',
				'16': '30rem',
			  },
			  fontSize: {
				'headerText': '86px',
				'32':'32px',
				'36':'36px'
			  },
			  letterSpacing: {
				'headerSpace': '0.539556px',
			  },
			  fontFamily: {
				'V-Bold': 'Volgue, sans-serif',	
				'Poppins': 'Poppins, sans-serif',	
				'Poppins-Light': 'Poppins-Light, sans-serif',	
			  },
			  spacing: {
				'128': '553.54px',
				'939': '939px',
				'154': '154.93px',
				'55': '55.95px',
				'207': '207px',
				'56': '56px',
				'1200' : '1200px',
				'650': '650px',
				'536': '536px',
				'83': '83px',
				'591': '591px',
				'761':'761px',
				'447':'447.14px',
				'554':'554px',
				'112':'111.42px',
				'346':'346px',
				'1500':'1500px',
				'515':'515px',
				'60':'60px',
				'336': '336px',
				'761':'761px',
				'50':'50px',
				'RoadBorder':'50%',
				'RoadPad': '50px 0',
				'RoadMar': '0 auto',
				'30':'30px',
				'10':'10px',
				'370':'370px',
				'25':'-25px',
				'36':'36px',
				'45':'45px'
				
			  },
			  borderWidth: {
				'5':'5px',
			  },
					  
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'primary': '#EC8E4F',
			'white': '#FFFFFF',
			'purple': '#9B478A',
			'team': '#F8D4BC',
			'brown' : '#46331E',
			'BB9061':'#BB9061'
		
		  },
		  
	},
	variants: {
		extend: {},
	},
	plugins: [],
};