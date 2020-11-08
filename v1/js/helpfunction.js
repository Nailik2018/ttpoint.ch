function elosToClassment(elo){
    if(elo <= 659){
        return "D1";
    }else if (elo >= 660 && elo <= 769){
        return "D2";
    }else if (elo >= 770 && elo <= 859){
        return "D3";
    }else if (elo >= 860 && elo <= 929){
        return "D4";
    }else if (elo >= 930 && elo <= 989) {
        return "D5";
    }else if (elo >= 990 && elo <= 1039) {
        return "C6";
    }else if (elo >= 1040 && elo <= 1079) {
        return "C7";
    }else if (elo >= 1080 && elo <= 1119) {
        return "C8";
    }else if (elo >= 1120 && elo <= 1159) {
        return "C9";
    }else if (elo >= 1160 && elo <= 1199){
        return "C10";
    }else if (elo >= 1200 && elo <= 1239){
        return "B11";
    }else if (elo >= 1240 && elo <= 1279){
        return "B12";
    }else if (elo >= 1280 && elo <= 1319){
        return "B13";
    }else if (elo >= 1320 && elo <= 1359){
        return "B14";
    }else if (elo >= 1360 && elo <= 1409){
        return "B15";
    }else if (elo >= 1410 && elo <= 1469){
        return "A16";
    }else if (elo >= 1470 && elo <= 1539){
        return "A17";
    }else if (elo >= 1540 && elo <= 1629){
        return "A18";
    }else if (elo >= 1630 && elo <= 1739){
        return "A19";
    }else if (elo >= 1740){
        return "A20";
    }
}