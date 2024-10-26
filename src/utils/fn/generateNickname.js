const nickNameList = [['똑똑한','코딩하는','졸린','먹보','키다리','멋쟁이','심심한','상남자','너무빠른','흙수저','아싸', '원딜' , '왕자병'],
['뚜비','오리','꿀벌', '바바리맨', '토끼', '호랑이','거북이', '제임스', '전투기계', '페럿','오목눈이','부엉이']]

const generateNickname = () => {
    return `${nickNameList[0][Math.floor(Math.random() * nickNameList[0].length)]}${nickNameList[1][Math.floor(Math.random() * nickNameList[1].length)]}`
}

export default generateNickname;