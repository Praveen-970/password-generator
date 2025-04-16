document.getElementById('suggestion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get user inputs
    const eventType = document.getElementById('event-type').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skinTone = document.getElementById('skin-tone').value;

    // --- Suggestion Logic ---
    let outfitSuggestion = "No specific suggestion. Consider the dress code.";
    let shoeSuggestion = "Choose comfortable and event-appropriate shoes.";
    let colorSuggestion = ["Neutral colors like black, white, grey, beige often work."];
    let outfitSearchQuery = "";
    let shoeSearchQuery = "";
    let colorSearchTerm = ""; // For color palette search

    // --- Define Colors based on Skin Tone ---
    const colorPalettes = {
        fair_cool: ["Pastels (light pink, baby blue)", "Jewel Tones (emerald, sapphire, ruby)", "Silver", "Cool Grey", "True White"],
        fair_warm: ["Earth Tones (olive, mustard)", "Corals", "Peaches", "Gold", "Cream", "Warm Browns"],
        light_medium_cool: ["Blues (navy, royal)", "Pinks (rose, fuchsia)", "Purples (lavender, plum)", "Silver", "Cool Grey", "Black"],
        light_medium_warm: ["Greens (olive, forest)", "Oranges", "Yellows", "Gold", "Khaki", "Browns", "Teal"],
        olive_neutral: ["Most colors work!", "Mauve", "Dusty Rose", "Teal", "Jade Green", "Burgundy", "Off-white"],
        tan_deep_warm: ["Rich Earth Tones", "Mustard Yellow", "Burnt Orange", "Deep Greens", "Gold", "Bronze", "Chocolate Brown"],
        tan_deep_cool: ["Vibrant Jewel Tones", "Cobalt Blue", "Magenta", "Deep Purple", "Silver", "Charcoal Grey", "Pure White", "Black"],
        any: ["Neutrals (Black, White, Grey, Navy)", "Consider popular seasonal colors"]
    };
    colorSuggestion = colorPalettes[skinTone] || colorPalettes['any'];
    colorSearchTerm = skinTone.includes('cool') ? "cool tone color palette" : skinTone.includes('warm') ? "warm tone color palette" : "neutral tone color palette";


    // --- Outfit & Shoe Logic based on Event and Gender ---
    // (This is a very simplified example, expand with more detail)
    if (gender === 'woman') {
        switch (eventType) {
            case 'wedding_guest':
                outfitSuggestion = "Consider a light Saree, Lehenga Choli, or a floral Midi/Maxi Dress.";
                shoeSuggestion = "Wedges, comfortable Block Heels, or elegant Flats.";
                outfitSearchQuery = "day wedding guest dress india";
                shoeSearchQuery = "comfortable block heels for wedding";
                break;
            case 'wedding_guest_evening':
                outfitSuggestion = "A formal Saree, embellished Lehenga, Anarkali Suit, or an elegant Gown/Cocktail Dress.";
                shoeSuggestion = "Heeled Sandals, Stilettos, or embellished Juttis.";
                outfitSearchQuery = "evening wedding guest dress india formal";
                shoeSearchQuery = "formal heels for wedding";
                break;
            case 'festive_party':
                outfitSuggestion = "Bright Kurta set, Sharara suit, fusion wear, or a festive Saree.";
                shoeSuggestion = "Juttis, Kolhapuris, or embellished Heels/Flats.";
                outfitSearchQuery = "indian festive wear for women";
                shoeSearchQuery = "ethnic footwear for women";
                break;
            case 'cocktail_party':
                outfitSuggestion = "Cocktail Dress (e.g., LBD, sheath, A-line), chic Jumpsuit, or a stylish Top with Skirt/Trousers.";
                shoeSuggestion = "Heels (stilettos, pumps, block), or dressy Flats.";
                outfitSearchQuery = "cocktail dress woman";
                shoeSearchQuery = "party wear heels";
                break;
            case 'business_formal':
                outfitSuggestion = "Formal Salwar Kameez, Business Saree, or a conservative Trouser Suit/Skirt Suit.";
                shoeSuggestion = "Pumps, formal Loafers, or closed-toe low Heels.";
                outfitSearchQuery = "business formal wear women india";
                shoeSearchQuery = "formal shoes women office";
                break;
            case 'business_casual':
                outfitSuggestion = "Smart Kurti with Trousers/Palazzos, Blouse with Chinos/Skirt, or a casual Dress with a Blazer.";
                shoeSuggestion = "Loafers, Ballerina Flats, smart Mules, or low Block Heels.";
                outfitSearchQuery = "business casual women india";
                shoeSearchQuery = "smart casual shoes women";
                break;
            case 'casual_outing':
            case 'casual_evening':
                outfitSuggestion = "Comfortable Kurti, Jeans/Trousers with Top, casual Maxi Dress, or a Jumpsuit.";
                shoeSuggestion = "Sneakers, Sandals, Flats, or casual Boots/Mules.";
                outfitSearchQuery = "casual outfits women india";
                shoeSearchQuery = "casual shoes women";
                break;
        }
    } else { // gender === 'man'
        switch (eventType) {
            case 'wedding_guest':
                outfitSuggestion = "Kurta Pyjama (light colors), Nehru Jacket with Trousers, or a light Suit.";
                shoeSuggestion = "Mojaris, Kolhapuris, Loafers, or Sandals.";
                outfitSearchQuery = "day wedding guest outfit men india";
                shoeSearchQuery = "ethnic footwear men wedding";
                break;
            case 'wedding_guest_evening':
                outfitSuggestion = "Sherwani, Bandhgala Suit, formal Kurta set, or a dark Suit.";
                shoeSuggestion = "Formal Mojaris, Oxford Shoes, or Dress Loafers.";
                outfitSearchQuery = "evening wedding guest outfit men india formal";
                shoeSearchQuery = "formal shoes men wedding";
                break;
            case 'festive_party':
                outfitSuggestion = "Embroidered Kurta Pyjama, Pathani Suit, or Nehru Jacket ensemble.";
                shoeSuggestion = "Mojaris, Kolhapuris, Sandals, or Loafers.";
                outfitSearchQuery = "indian festive wear for men";
                shoeSearchQuery = "ethnic footwear men";
                break;
            case 'cocktail_party':
                outfitSuggestion = "Smart Blazer with Chinos/Trousers, stylish Shirt, or a semi-formal Suit (no tie optional).";
                shoeSuggestion = "Loafers, Brogues, Chelsea Boots, or smart Sneakers.";
                outfitSearchQuery = "cocktail party outfit men";
                shoeSearchQuery = "party wear shoes men";
                break;
            case 'business_formal':
                outfitSuggestion = "Formal Suit (Navy, Charcoal, Black) with Tie.";
                shoeSuggestion = "Oxford Shoes, Derby Shoes (well-polished).";
                outfitSearchQuery = "business formal wear men";
                shoeSearchQuery = "formal dress shoes men";
                break;
            case 'business_casual':
                outfitSuggestion = "Chinos/Formal Trousers with Collared Shirt (Polo or Button-down), optional Blazer/Sweater.";
                shoeSuggestion = "Loafers, Brogues, clean Sneakers, or Chukka Boots.";
                outfitSearchQuery = "business casual men india";
                shoeSearchQuery = "smart casual shoes men";
                break;
            case 'casual_outing':
            case 'casual_evening':
                outfitSuggestion = "Jeans/Chinos with T-shirt/Casual Shirt, or a comfortable Kurta.";
                shoeSuggestion = "Sneakers, Loafers, Sandals, or casual Boots.";
                outfitSearchQuery = "casual outfits men india";
                shoeSearchQuery = "casual shoes men";
                break;
        }
    }

    // --- Display Results ---
    const resultsArea = document.getElementById('results-area');
    const outfitTextElem = document.getElementById('outfit-text');
    const outfitLinkElem = document.getElementById('outfit-link');
    const shoeTextElem = document.getElementById('shoe-text');
    const shoeLinkElem = document.getElementById('shoe-link');
    const colorTextElem = document.getElementById('color-text');
    const colorSwatchesElem = document.getElementById('color-swatches');
    const colorLinkElem = document.getElementById('color-link');


    // Update text content
    outfitTextElem.textContent = outfitSuggestion;
    shoeTextElem.textContent = shoeSuggestion;
    colorTextElem.textContent = `General palette based on selection: ${colorSuggestion.join(', ')}`;

    // Generate Google search links
    const googleBaseUrl = "https://www.google.com/search?tbm=isch&q=";

    if (outfitSearchQuery) {
        outfitLinkElem.href = googleBaseUrl + encodeURIComponent(`${outfitSearchQuery} ${gender}`);
        outfitLinkElem.classList.remove('hidden');
    } else {
        outfitLinkElem.classList.add('hidden');
    }

    if (shoeSearchQuery) {
        // Add gender to shoe query for better results
        shoeLinkElem.href = googleBaseUrl + encodeURIComponent(`${shoeSearchQuery} ${gender}`);
        shoeLinkElem.classList.remove('hidden');
    } else {
        shoeLinkElem.classList.add('hidden');
    }

    if (colorSearchTerm) {
        colorLinkElem.href = googleBaseUrl + encodeURIComponent(colorSearchTerm);
        colorLinkElem.classList.remove('hidden');
    } else {
        colorLinkElem.classList.add('hidden');
    }


    // Generate color swatches (simple approximation)
    colorSwatchesElem.innerHTML = ''; // Clear previous swatches
    const simpleColorMap = { // Very rough mapping for display
        "Pastels": "#FFD1DC", "Jewel Tones": "#9B111E", "Silver": "#C0C0C0", "Cool Grey": "#808080", "True White": "#FFFFFF",
        "Earth Tones": "#A0522D", "Corals": "#FF7F50", "Peaches": "#FFDAB9", "Gold": "#FFD700", "Cream": "#FFFDD0", "Warm Browns": "#8B4513",
        "Blues": "#0000FF", "Pinks": "#FFC0CB", "Purples": "#800080", "Black": "#000000",
        "Greens": "#008000", "Oranges": "#FFA500", "Yellows": "#FFFF00", "Khaki": "#F0E68C", "Teal": "#008080",
        "Most colors work!": "#CCCCCC", "Mauve": "#E0B0FF", "Dusty Rose": "#DCAE96", "Jade Green": "#00A86B", "Burgundy": "#800020", "Off-white": "#FAF0E6",
        "Rich Earth Tones": "#8B4513", "Mustard Yellow": "#FFDB58", "Burnt Orange": "#CC5500", "Deep Greens": "#006400", "Bronze": "#CD7F32", "Chocolate Brown": "#D2691E",
        "Vibrant Jewel Tones": "#9F2B68", "Cobalt Blue": "#0047AB", "Magenta": "#FF00FF", "Deep Purple": "#301934", "Charcoal Grey": "#36454F", "Pure White": "#FFFFFF",
        "Neutrals": "#808080", "Consider popular seasonal colors": "#A9A9A9"
    };

    colorSuggestion.forEach(colorName => {
        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        // Find a representative color from the name
        let representativeColorKey = Object.keys(simpleColorMap).find(key => colorName.toLowerCase().includes(key.toLowerCase().split(' ')[0].replace('(', ''))); // Match first word, remove parenthesis if present
        // Fallback if no match or if the term is very generic like "Most colors work!"
        if (!representativeColorKey || colorName.includes("Most colors") || colorName.includes("Neutrals") || colorName.includes("seasonal")) {
            representativeColorKey = Object.keys(simpleColorMap).find(key => colorName.toLowerCase().startsWith(key.toLowerCase())) || "Neutrals";
        }
        swatch.style.backgroundColor = simpleColorMap[representativeColorKey]; // Use found key or default
        swatch.title = colorName; // Tooltip
        colorSwatchesElem.appendChild(swatch);
    });


    // Show the results area
    resultsArea.classList.remove('hidden');
});
