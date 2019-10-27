function countCharactersWithSettings(text) {
    // TODO: Allow global settings to include or exclude spaces and maybe other factors

    /* Strip non-printing characters:: Convert to a setting-driven action */
    text = text.replace(/[\x00-\x1F]/g, '');

    return text ? text.length : 0;
}

function countHiddenCharacters(text) {
    /* Keep only non-printing characters */
    text = text.replace(/[^\x00-\x1F]/g, '');

    return text ? text.length : 0;
}

function countWordsWithSettings(text) {
    // TODO: Allow global settings to include or exclude certain things

    return text ?
        text
        .trim()
        .replace(/[^A-Za-z0-9_\s]+/g, '')
        .split(/\s+/g)
        .length :
        0;
}