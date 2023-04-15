import { Plan } from "@components/Plan";

export const Pricing = () => {

    const pricing = [
        {
            id: "1",
            name: "Basic",
            price: 10,
            features: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
            id: "2",
            name: "Premium",
            price: 20,
            features: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
            id: "3",
            name: "Enterprise",
            price: 30,
            features: ["Feature 1", "Feature 2", "Feature 3"],
        },];

    return (
        <div className="pricing">
            <h2 className="pricing__title">Pricing</h2>
            <div className="pricing__cards">
                {pricing.map((plan) => (
                    <Plan key={plan.id} plan={plan} />
                ))}
            </div>
        </div>
    );
};