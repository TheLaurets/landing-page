interface Plan {
    id: string;
    name: string;
    price: number;
    features: string[];
}

export const Plan = ({ plan }: { plan: Plan }) => {
    const { id, name, price, features } = plan;
    return (
        <div className="plan">
            <h3 className="plan__title">{name}</h3>
            <p className="plan__price">${price}</p>
            <ul className="plan__features">
                {features.map((feature) => (
                    <li key={feature} className="plan__feature">
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};
