module.exports = function transportFee(shift) {
    if (shift === "morning") {
        return "R20";
    } else if (shift === "afternoon") {
        return "R10, work will cover your transport back home.";
    } else {
        return "Your transport is free, you're covered.";
    }
};
