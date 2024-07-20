import r1 from '../img/r1.png';
import r2 from '../img/r2.png';
import r3 from '../img/r3.png';
import r4 from '../img/r4.png';
import r5 from '../img/r5.png';
import r6 from '../img/r6.png';
import r7 from '../img/r7.png';
import r8 from '../img/r8.png';
import r9 from '../img/r9.png';
import r10 from '../img/r10.png';
import r11 from '../img/r11.png';
import r12 from '../img/r12.png';
import r13 from '../img/r13.png';
import r14 from '../img/r14.png';


export const recipeCardsData = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        image: r1,
        rating: '★★★★☆',
        link: '/EasyEats/recipes/meal/1',
        duration: '30 mins',
        ingredients: [
            '200g spaghetti',
            '100g pancetta',
            '2 large eggs',
            '50g pecorino cheese',
            '50g parmesan cheese',
            '2 garlic cloves, peeled and left whole',
            '50g unsalted butter',
            'Salt and freshly ground black pepper'
        ],
        instructions: [
            'Cook the spaghetti in a large pot of boiling salted water until al dente.',
            'Fry the pancetta in a pan until crispy.',
            'Beat the eggs in a bowl, then finely grate the pecorino and parmesan and add to the eggs.',
            'Drain the spaghetti, reserving some of the cooking water.',
            'Add the spaghetti to the pan with the pancetta and remove from the heat.',
            'Quickly stir in the egg and cheese mixture, adding some reserved cooking water to loosen if necessary.',
            'Season with salt and freshly ground black pepper and serve immediately.'
        ],
        nutrition: {
            calories: 450,
            protein: '20g',
            fat: '25g',
            carbs: '35g'
        },
        numStars: 4,
        diet: ['Paleo'],
        allergy: ['Dairy', 'Gluten'],
        cuisine: 'Italian',
        ingredientList: ['spaghetti', 'pancetta', 'eggs', 'pecorino cheese', 'parmesan cheese', 'garlic', 'unsalted butter', 'black pepper']
    },
    {
        id: 2,
        title: 'Chicken Alfredo',
        image: r2,
        rating: '★★★☆☆',
        link: '/EasyEats/recipes/meal/2',
        duration: '45 mins',
        ingredients: [
            '200g fettuccine pasta',
            '2 chicken breasts, sliced',
            '2 tbsp olive oil',
            '1 cup heavy cream',
            '1 cup grated parmesan cheese',
            '2 garlic cloves, minced',
            'Salt and freshly ground black pepper',
            'Chopped parsley for garnish'
        ],
        instructions: [
            'Cook the fettuccine according to the package instructions and drain.',
            'Heat olive oil in a large skillet over medium-high heat.',
            'Add the chicken and cook until browned and cooked through, about 5-7 minutes.',
            'Remove the chicken from the skillet and set aside.',
            'In the same skillet, add the garlic and cook for 1 minute.',
            'Pour in the heavy cream and bring to a simmer.',
            'Stir in the parmesan cheese until melted and the sauce is smooth.',
            'Return the chicken to the skillet and add the cooked fettuccine.',
            'Toss to coat the pasta and chicken in the sauce.',
            'Season with salt and freshly ground black pepper, and garnish with chopped parsley.'
        ],
        nutrition: {
            calories: 600,
            protein: '30g',
            fat: '40g',
            carbs: '45g'
        },
        numStars: 3,
        diet: [],
        allergy: ['Dairy', 'Gluten'],
        cuisine: 'Italian',
        ingredientList: ['fettuccine pasta', 'chicken breasts', 'olive oil', 'heavy cream', 'parmesan cheese', 'garlic', 'black pepper', 'parsley']
    },
    {
        id: 3,
        title: 'Beef Stroganoff',
        image: r3,
        rating: '★★★★★',
        link: '/EasyEats/recipes/meal/3',
        duration: '40 mins',
        ingredients: [
            '500g beef sirloin, sliced into thin strips',
            '2 tbsp olive oil',
            '1 onion, finely chopped',
            '2 garlic cloves, minced',
            '250g mushrooms, sliced',
            '1 cup beef broth',
            '1 cup sour cream',
            '2 tbsp flour',
            'Salt and freshly ground black pepper',
            'Chopped parsley for garnish'
        ],
        instructions: [
            'Heat olive oil in a large skillet over medium-high heat.',
            'Add the beef strips and cook until browned, about 2-3 minutes per side.',
            'Remove the beef from the skillet and set aside.',
            'In the same skillet, add the onion and cook until softened.',
            'Add the garlic and mushrooms and cook for another 5 minutes.',
            'Sprinkle the flour over the vegetables and stir to combine.',
            'Pour in the beef broth and bring to a simmer, stirring frequently.',
            'Reduce the heat to low and stir in the sour cream.',
            'Return the beef to the skillet and cook until heated through.',
            'Season with salt and freshly ground black pepper, and garnish with chopped parsley.'
        ],
        nutrition: {
            calories: 500,
            protein: '35g',
            fat: '30g',
            carbs: '20g'
          },
          numStars: 5,
          diet: [],
          allergy: ['Dairy', 'Gluten'],
          cuisine: 'Russian',
          ingredientList: ['beef sirloin', 'olive oil', 'onion', 'garlic', 'mushrooms', 'beef broth', 'sour cream', 'flour', 'black pepper', 'parsley']
      },
    {
        id: 4,
        title: 'Vegetable Stir Fry',
        image: r4,
        rating: '★★★★☆',
        link: '/EasyEats/recipes/meal/4',
        duration: '25 mins',
        ingredients: [
            '2 tbsp olive oil',
            '1 red bell pepper, sliced',
            '1 yellow bell pepper, sliced',
            '1 green bell pepper, sliced',
            '2 carrots, julienned',
            '1 cup broccoli florets',
            '1 cup snow peas',
            '2 garlic cloves, minced',
            '1/4 cup soy sauce',
            '2 tbsp hoisin sauce',
            '1 tsp sesame oil',
            'Sesame seeds for garnish'
        ],
        instructions: [
            'Heat olive oil in a large skillet or wok over medium-high heat.',
            'Add the garlic and cook for 1 minute.',
            'Add the bell peppers, carrots, broccoli, and snow peas and stir-fry for 5-7 minutes.',
            'Pour in the soy sauce, hoisin sauce, and sesame oil, and stir to coat the vegetables.',
            'Continue to cook for another 2-3 minutes, until the vegetables are tender-crisp.',
            'Serve immediately, garnished with sesame seeds.'
        ],
        nutrition: {
            calories: 200,
            protein: '6g',
            fat: '10g',
            carbs: '25g'
          },
          numStars: 4,
          diet: ['Vegan', 'Vegetarian'],
          allergy: ['Soy'],
          cuisine: 'Asian',
          ingredientList: ['olive oil', 'bell pepper', 'carrots', 'broccoli', 'snow peas', 'garlic', 'soy sauce', 'hoisin sauce', 'sesame oil', 'sesame seeds']
      },
  
    {
        id: 5,
        title: 'Tacos',
        image: r5,
        rating: '★★★☆☆',
        link: '/EasyEats/recipes/meal/5',
        duration: '20 mins',
        ingredients: [
            '8 small corn tortillas',
            '400g ground beef or chicken',
            '1 tbsp olive oil',
            '1 onion, finely chopped',
            '2 garlic cloves, minced',
            '1 tsp chili powder',
            '1 tsp cumin',
            'Salt and freshly ground black pepper',
            '1 cup shredded lettuce',
            '1 cup diced tomatoes',
            '1 cup shredded cheese',
            'Sour cream and salsa for serving'
        ],
        instructions: [
            'Heat olive oil in a large skillet over medium-high heat.',
            'Add the onion and cook until softened.',
            'Add the garlic and cook for 1 minute.',
            'Add the ground beef or chicken, chili powder, and cumin, and cook until the meat is browned and cooked through.',
            'Season with salt and freshly ground black pepper.',
            'Warm the tortillas in a dry skillet or microwave.',
            'Fill each tortilla with the cooked meat, lettuce, tomatoes, and cheese.',
            'Serve with sour cream and salsa.'
        ],
        nutrition: {
            calories: 300,
            protein: '20g',
            fat: '15g',
            carbs: '25g'
        },
        numStars: 3,
        diet: [],
        allergy: ['Dairy', 'Gluten'],
        cuisine: 'Mexican',
        ingredientList: ['tortillas', 'beef', 'chicken', 'olive oil', 'onion', 'garlic', 'chili powder', 'cumin', 'lettuce', 'tomatoes', 'cheese', 'sour cream', 'salsa']
      },
    {
        id: 6,
        title: 'Caesar Salad',
        image: r6,
        rating: '★★★★☆',
        link: '/EasyEats/recipes/meal/6',
        duration: '15 mins',
        ingredients: [
            '2 romaine lettuce hearts, chopped',
            '1/2 cup croutons',
            '1/4 cup grated parmesan cheese',
            '1/4 cup Caesar dressing',
            '1 lemon, cut into wedges',
            'Salt and freshly ground black pepper'
        ],
        instructions: [
            'In a large bowl, combine the chopped romaine lettuce, croutons, and parmesan cheese.',
            'Drizzle with Caesar dressing and toss to coat.',
            'Season with salt and freshly ground black pepper to taste.',
            'Serve immediately with lemon wedges.'
        ],
        nutrition: {
            calories: 200,
            protein: '6g',
            fat: '15g',
            carbs: '15g'
        },
        numStars: 4,
        diet: ['Vegetarian'],
        allergy: ['Dairy', 'Gluten'],
        cuisine: 'American',
        ingredientList: ['romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing', 'lemon', 'black pepper']
    },
    {
        id: 7,
        title: 'Baked Salmon',
        image: r7,
        rating: '★★★★★',
        link: '/EasyEats/recipes/meal/7',
        duration: '35 mins',
        ingredients: [
            '4 salmon fillets',
            '2 tbsp olive oil',
            '2 garlic cloves, minced',
            '1 lemon, sliced',
            'Salt and freshly ground black pepper',
            'Chopped fresh dill for garnish'
        ],
        instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Place the salmon fillets on a baking sheet lined with parchment paper.',
            'Drizzle with olive oil and sprinkle with minced garlic.',
            'Season with salt and freshly ground black pepper.',
            'Top each fillet with a slice of lemon.',
            'Bake for 20-25 minutes, or until the salmon is cooked through and flakes easily with a fork.',
            'Garnish with chopped fresh dill and serve.'
        ],
        nutrition: {
            calories: 350,
            protein: '25g',
            fat: '25g',
            carbs: '5g'
        },
        numStars: 5,
        diet: ['Paleo', 'Pescatarian', 'Keto'],
        allergy: ['Fish'],
        cuisine: 'American',
        ingredientList: ['salmon fillets', 'olive oil', 'garlic', 'lemon', 'black pepper', 'dill']
      },
    {
        id: 8,
        title: 'Lasagna',
        image: r8,
        rating: '★★★☆☆',
        link: '/EasyEats/recipes/meal/8',
        duration: '1 hr',
        ingredients: [
            '9 lasagna noodles',
            '500g ricotta cheese',
            '2 cups shredded mozzarella cheese',
            '1/2 cup grated parmesan cheese',
            '1 egg',
            '4 cups marinara sauce',
            '500g ground beef',
            '1 onion, finely chopped',
            '2 garlic cloves, minced',
            'Salt and freshly ground black pepper',
            'Chopped fresh basil for garnish'
        ],
        instructions: [
            'Preheat the oven to 375°F (190°C).',
            'Cook the lasagna noodles according to the package instructions and drain.',
            'In a large skillet, cook the ground beef, onion, and garlic until the meat is browned and the onion is softened.',
            'Stir in the marinara sauce and season with salt and freshly ground black pepper.',
            'In a bowl, combine the ricotta cheese, 1 cup of mozzarella cheese, parmesan cheese, and egg.',
            'Spread a layer of meat sauce in the bottom of a baking dish.',
            'Arrange a layer of lasagna noodles over the sauce.',
            'Spread a layer of the ricotta mixture over the noodles.',
            'Repeat the layers, ending with a layer of meat sauce.',
            'Sprinkle the remaining mozzarella cheese over the top.',
            'Cover with foil and bake for 25 minutes.',
            'Remove the foil and bake for another 20 minutes, or until the cheese is bubbly and golden brown.',
            'Garnish with chopped fresh basil and serve.'
        ],
        nutrition: {
            calories: 600,
            protein: '30g',
            fat: '30g',
            carbs: '50g'
        },
        numStars: 3,
        diet: [],
        allergy: ['Dairy', 'Gluten'],
        cuisine: 'Italian',
        ingredientList: ['lasagna noodles', 'ricotta cheese', 'mozzarella cheese', 'parmesan cheese', 'egg', 'marinara sauce', 'ground beef', 'onion', 'garlic', 'black pepper', 'basil']
      }, {
        id: 9,
        title: 'Chicken Tikka Masala',
        image: r9,
        rating: '★★★★☆',
        link: '/EasyEats/recipes/meal/9',
        duration: '1 hr',
        ingredients: [
          '500g chicken breast, cut into chunks',
          '1 cup plain yogurt',
          '2 tbsp tikka masala paste',
          '1 onion, finely chopped',
          '2 garlic cloves, minced',
          '1 tbsp ginger, minced',
          '1 can (400g) diced tomatoes',
          '1 cup heavy cream',
          '2 tbsp vegetable oil',
          'Salt and pepper to taste',
          'Fresh cilantro for garnish'
        ],
        instructions: [
          'In a bowl, mix the chicken with yogurt and tikka masala paste. Marinate for at least 30 minutes.',
          'Heat vegetable oil in a pan over medium heat. Add onions, garlic, and ginger, and cook until softened.',
          'Add marinated chicken and cook until browned on all sides.',
          'Stir in diced tomatoes and simmer for 15 minutes.',
          'Add heavy cream and cook for another 10 minutes until the sauce thickens.',
          'Season with salt and pepper, and garnish with fresh cilantro before serving.'
        ],
        nutrition: {
          calories: 550,
          protein: '35g',
          fat: '35g',
          carbs: '20g'
        },
        numStars: 4,
        diet: ['Keto'],
        allergy: ['Dairy'],
        cuisine: 'Indian',
        ingredientList: ['chicken breast', 'yogurt', 'tikka masala paste', 'onion', 'garlic', 'ginger', 'diced tomatoes', 'heavy cream', 'vegetable oil', 'salt', 'pepper', 'cilantro']
      },
      {
        id: 10,
        title: 'Pad Thai',
        image: r10,
        rating: '★★★★☆',
        link: '/EasyEats/recipes/meal/10',
        duration: '30 mins',
        ingredients: [
          '200g rice noodles',
          '2 tbsp vegetable oil',
          '1 onion, finely chopped',
          '2 garlic cloves, minced',
          '100g shrimp, peeled and deveined',
          '2 eggs, lightly beaten',
          '1 cup bean sprouts',
          '1/4 cup chopped peanuts',
          '2 tbsp fish sauce',
          '2 tbsp soy sauce',
          '1 tbsp tamarind paste',
          '1 tbsp sugar',
          'Lime wedges and cilantro for garnish'
        ],
        instructions: [
          'Cook the rice noodles according to the package instructions and set aside.',
          'Heat vegetable oil in a pan over medium heat. Add onion and garlic, and cook until softened.',
          'Add shrimp and cook until pink and cooked through.',
          'Push the shrimp and onion to one side of the pan and pour in beaten eggs. Scramble until cooked.',
          'Add cooked noodles, bean sprouts, peanuts, fish sauce, soy sauce, tamarind paste, and sugar to the pan. Toss everything together until well combined.',
          'Serve with lime wedges and cilantro.'
        ],
        nutrition: {
          calories: 450,
          protein: '25g',
          fat: '20g',
          carbs: '45g'
        },
        numStars: 4,
        diet: ['Vegetarian'],
        allergy: ['Peanut & Tree Nuts', 'Soy'],
        cuisine: 'Thai',
        ingredientList: ['rice noodles', 'vegetable oil', 'onion', 'garlic', 'shrimp', 'eggs', 'bean sprouts', 'peanuts', 'fish sauce', 'soy sauce', 'tamarind paste', 'sugar', 'lime', 'cilantro']
      },
      {
        id: 11,
        title: 'Gyro Wraps',
        image: r11,
        rating: '★★★☆☆',
        link: '/EasyEats/recipes/meal/11',
        duration: '45 mins',
        ingredients: [
          '500g lamb, thinly sliced',
          '4 pita bread',
          '1 cup tzatziki sauce',
          '1 red onion, thinly sliced',
          '1 tomato, sliced',
          '1 cucumber, sliced',
          '2 tbsp olive oil',
          'Salt and pepper to taste'
        ],
        instructions: [
          'Heat olive oil in a pan over medium heat. Season lamb with salt and pepper and cook until browned.',
          'Warm pita bread in a dry skillet or microwave.',
          'To assemble, spread tzatziki sauce on each pita bread. Add cooked lamb, onion, tomato, and cucumber.',
          'Roll up the pita bread and serve immediately.'
        ],
        nutrition: {
          calories: 500,
          protein: '30g',
          fat: '30g',
          carbs: '35g'
        },
        numStars: 3,
        diet: ['Paleo'],
        allergy: ['Dairy'],
        cuisine: 'Greek',
        ingredientList: ['lamb', 'pita bread', 'tzatziki sauce', 'red onion', 'tomato', 'cucumber', 'olive oil', 'salt', 'pepper']
      },
      {
        id: 12,
        title: 'Miso Soup',
        image: r12,
        rating: '★★★★☆',
        link: '/EasyEats/recipes/meal/12',
        duration: '20 mins',
        ingredients: [
          '4 cups dashi stock',
          '3 tbsp miso paste',
          '100g tofu, cubed',
          '1 cup seaweed',
          '2 green onions, sliced',
          '1 cup mushrooms, sliced'
        ],
        instructions: [
          'In a pot, heat dashi stock over medium heat until hot but not boiling.',
          'Whisk in miso paste until dissolved.',
          'Add tofu, seaweed, mushrooms, and green onions to the pot.',
          'Simmer for 5 minutes until vegetables are tender.',
          'Serve hot.'
        ],
        nutrition: {
          calories: 80,
          protein: '6g',
          fat: '4g',
          carbs: '6g'
        },
        numStars: 4,
        diet: ['Vegan'],
        allergy: ['Soy'],
        cuisine: 'Japanese',
        ingredientList: ['dashi stock', 'miso paste', 'tofu', 'seaweed', 'green onions', 'mushrooms']
      },
      {
        id: 13,
        title: 'Greek Salad',
        image: r13,
        rating: '★★★★☆',
        link: '/EasyEats/recipes/meal/13',
        duration: '15 mins',
        ingredients: [
          '1 cucumber, diced',
          '1 red bell pepper, diced',
          '1 cup cherry tomatoes, halved',
          '1/2 cup Kalamata olives',
          '1/2 cup feta cheese, crumbled',
          '2 tbsp olive oil',
          '1 tbsp red wine vinegar',
          '1 tsp dried oregano',
          'Salt and pepper to taste'
        ],
        instructions: [
          'In a large bowl, combine cucumber, bell pepper, cherry tomatoes, olives, and feta cheese.',
          'In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper.',
          'Pour dressing over salad and toss to coat.',
          'Serve immediately.'
        ],
        nutrition: {
          calories: 200,
          protein: '6g',
          fat: '15g',
          carbs: '10g'
        },
        numStars: 4,
        diet: ['Vegetarian'],
        allergy: ['Dairy'],
        cuisine: 'Greek',
        ingredientList: ['cucumber', 'red bell pepper', 'cherry tomatoes', 'Kalamata olives', 'feta cheese', 'olive oil', 'red wine vinegar', 'dried oregano', 'salt', 'pepper']
      },
      {
        id: 14,
        title: 'Mexican Street Corn',
        image: r14,
        rating: '★★★★★',
        link: '/EasyEats/recipes/meal/14',
        duration: '20 mins',
        ingredients: [
          '4 ears of corn, husked',
          '1/2 cup mayonnaise',
          '1/2 cup sour cream',
          '1/2 cup cotija cheese, crumbled',
          '1 tbsp chili powder',
          '1 tbsp lime juice',
          '2 tbsp chopped cilantro',
          'Salt to taste'
        ],
        instructions: [
          'Grill corn over medium-high heat, turning occasionally, until charred and cooked through.',
          'In a bowl, mix mayonnaise, sour cream, cotija cheese, chili powder, lime juice, and salt.',
          'Brush the mixture over the grilled corn.',
          'Garnish with chopped cilantro and serve.'
        ],
        nutrition: {
          calories: 250,
          protein: '6g',
          fat: '20g',
          carbs: '20g'
        },
        numStars: 5,
        diet: [],
        allergy: ['Dairy'],
        cuisine: 'Mexican',
        ingredientList: ['corn', 'mayonnaise', 'sour cream', 'cotija cheese', 'chili powder', 'lime juice', 'cilantro', 'salt']
      }
      
];