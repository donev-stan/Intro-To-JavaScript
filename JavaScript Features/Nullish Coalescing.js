
function calculatePrice (price, taxes, description) {

    // This is a problem if we want to pass nullish value (like 0)
    // taxes = taxes || .05; 
    // description = description || 'Default Item Price';

    taxes = taxes ?? .05; 
    description = description ?? 'Default Item Price';

    // or: 
    if (taxes == null) taxes = .05;

    const total = price * (1 + taxes);
    console.log(`${description} With Tax: $${total}`);
}


calculatePrice(100, 0.07, "GTX 1660ti");
calculatePrice(100, 0, "RTX 3060ti");
calculatePrice(100, undefined, undefined);
calculatePrice(100, undefined, "");

