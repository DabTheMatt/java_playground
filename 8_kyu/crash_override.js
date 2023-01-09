function aliasGen_1(n, s){
    let name = '';
    let famname = '';

    if (!isNaN(n[0]) || !isNaN(s[0])) {
        return "Your name must start with a letter from A - Z."
    } else {
        name = firstName[n[0].toUpperCase()];
        famname = surname[s[0].toUpperCase()];
        return name + ' ' + famname;
    }
}

aliasGen = (n, s) => !isNaN(n[0]) || !isNaN(s[0]) ? "Your name must start with a letter from A - Z." : firstName[n[0].toUpperCase()] + ' ' + surname[s[0].toUpperCase()];