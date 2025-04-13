
// base
import { useEffect, useState, useContext } from 'react';
import CategoriesContext from './CategoriesContext.js';
import NotesContext from './../NotesProvider/NotesContext.js';
import PreferencesContext from '../PreferencesProvider/PreferencesContext.js';

const CategoriesProvider = ({ children }) => {

    const {everyNotesSource, setEveryNotesSource} = useContext(NotesContext);
    const {isThemeLight} = useContext(PreferencesContext)
    
    const [everyCategoriesSource, setEveryCategoriesSource] = useState([
        {category: "Todas", count: 0, icon: "hugeicons:workflow-square-06", color: "#ffffff", colorName: "default", width: "22"},
        {category: "Estudo", count: 0, icon: "solar:book-linear", color: "#FAF684", colorName: "yellow", width: "22"},
        {category: "Pessoal", count: 0, icon: "hugeicons:in-love", color: "#A4E3C4", colorName: "mint", width: "22"},
        {category: "Trabalho", count: 0, icon: "fluent-mdl2:work-item", color: "#B8E0FF", colorName: "sky", width: "21"}
    ]);
    
    const [categoryColors, setCategoryColors] = useState([
        { colorName: "default", color: isThemeLight ? "#ffffff" : "rgb(62, 62, 62)" },
        { colorName: "red", color: isThemeLight ? "#FF7777" : "#8B0000" },
        { colorName: "orange", color: isThemeLight ? "#FFA66F" : "#CC5500" },
        { colorName: "peach", color: isThemeLight ? "#FFCB83" : "#B57230" },
        { colorName: "yellow", color: isThemeLight ? "#FAF684" : "#B8A900" },
        { colorName: "butter", color: isThemeLight ? "#F9F8C3" : "#918C4A" },
        { colorName: "green", color: isThemeLight ? "#7DF691" : "#005F2F" },
        { colorName: "mint", color: isThemeLight ? "#A4E3C4" : "#2D7356" },
        { colorName: "sky", color: isThemeLight ? "#B8E0FF" : "#005A99" },
        { colorName: "lavender", color: isThemeLight ? "#BD9FFF" : "#5D2A91" },
        { colorName: "candy-pink", color: isThemeLight ? "#FF9FF2" : "#8B3A8B" },
        { colorName: "pink", color: isThemeLight ? "#FF9FD2" : "#B03060" },
        { colorName: "gray", color: isThemeLight ? "#BCBCBC" : "#4F4F4F" },
        { colorName: "ash", color: isThemeLight ? "#969696" : "#3C3C3C" },
    ])
    

    const [categoryIcons, setCategoryIcons] = useState([
        // line 1
        {name:"book", icon:"solar:book-linear", width:"22"},
        {name:"workflow", icon:"hugeicons:workflow-square-06", width:"22"},
        {name:"clipboard", icon:"fluent-mdl2:work-item", width:"21"},
        {name:"money-work", icon:"lsicon:work-order-info-filled", width:"22"},
        {name:"chef", icon:"hugeicons:chef", width:"23"},
        {name:"book", icon:"fluent:food-48-regular", width:"22"},
        // line 2
        {name:"mental-health", icon:"ri:mental-health-line", width:"22"},
        {name:"grocery", icon:"ic:outline-local-grocery-store", width:"22"},
        {name:"task", icon:"grommet-icons:task", width:"22"},
        {name:"leaf", icon:"lucide:leaf", width:"20"},
        {name:"fish", icon:"hugeicons:fish-food", width:"24"},
        {name:"box", icon:"hugeicons:boxing-glove", width:"22"},
        // line 3
        {name:"health-recognition", icon:"tabler:health-recognition", width:"22"},
        {name:"in-love", icon:"hugeicons:in-love", width:"22"},
        {name:"game", icon:"ph:game-controller-bold", width:"21"},
        {name:"pen", icon:"ep:edit-pen", width:"20"},
        {name:"music", icon:"mingcute:music-2-ai-line", width:"22"},
        {name:"thophy", icon:"stash:trophy", width:"25"},
    ])
    const [currentCategory, setCurrentCategory] = useState(everyCategoriesSource[0])

    // count categories
    useEffect(() => {

        const categoriesCounts = {}

        everyNotesSource.forEach(item => {
            if(!item.isDeleted && !item.isArchived){
                if(categoriesCounts[item.category]){
                    categoriesCounts[item.category] += 1
                }
                else{
                    categoriesCounts[item.category] = 1;
                }
            }
        })

        setEveryCategoriesSource(prev => {
            const count = everyNotesSource.filter(item => !item.isDeleted && !item.isArchived).length;
            return prev.map(item => ({
                ...item,
                key: item.category,
                count: item.category === "Todas" ? count : (categoriesCounts[item.category] || 0)
            }));
        });
        
    }, [everyNotesSource])

    useEffect(() => {
        setCurrentCategory(prev => everyCategoriesSource.find(item => item.category === prev.category || prev))
    }, [everyCategoriesSource])


    // att color theme
    useEffect(() => {
        setCategoryColors([
            { colorName: "default", color: isThemeLight ? "#ffffff" : "rgb(62, 62, 62)" },
            { colorName: "red", color: isThemeLight ? "#FF7777" : "#8B0000" },
            { colorName: "orange", color: isThemeLight ? "#FFA66F" : "#CC5500" },
            { colorName: "peach", color: isThemeLight ? "#FFCB83" : "#B57230" },
            { colorName: "yellow", color: isThemeLight ? "#FAF684" : "#B8A900" },
            { colorName: "butter", color: isThemeLight ? "#F9F8C3" : "#918C4A" },
            { colorName: "green", color: isThemeLight ? "#7DF691" : "#005F2F" },
            { colorName: "mint", color: isThemeLight ? "#A4E3C4" : "#2D7356" },
            { colorName: "sky", color: isThemeLight ? "#B8E0FF" : "#005A99" },
            { colorName: "lavender", color: isThemeLight ? "#BD9FFF" : "#5D2A91" },
            { colorName: "candy-pink", color: isThemeLight ? "#FF9FF2" : "#8B3A8B" },
            { colorName: "pink", color: isThemeLight ? "#FF9FD2" : "#B03060" },
            { colorName: "gray", color: isThemeLight ? "#BCBCBC" : "#4F4F4F" },
            { colorName: "ash", color: isThemeLight ? "#969696" : "#a3a3a3" },
        ])
    }, [isThemeLight]);     

    useEffect(() => {
        setEveryCategoriesSource(prev => prev.map(item => {
            const categoryColor = categoryColors.find(category => category.colorName === item.colorName);
            return categoryColor ? { ...item, color: categoryColor.color } : item;
        }));
    }, [categoryColors]); 

    // 
    useEffect(() => {
        setEveryCategoriesSource(prev => 
            prev.map(itemCategory => {
                const matchingColor = categoryColors.find(itemColor => itemColor.colorName === itemCategory.colorName);
                return matchingColor && itemCategory.color !== matchingColor.color
                    ? { ...itemCategory, color: matchingColor.color }
                    : itemCategory;
            })
        );
    }, [isThemeLight, categoryColors]);
    

    const changeCategory = (category) => {
        setCurrentCategory(category)
    }


    // note
    const changeCategoryNote = (category, id) => {
        setEveryNotesSource((prev) =>
            prev.map((item) =>
                item.id === Number(id) ? { ...item, category } : item
            )
        );
    };


    /*categories screen*/
    // new category
    const addNewCategory = (name, icon, color, colorNameCategory) => {
        // if there is no category with that name
        if(name !== "" && !everyCategoriesSource.some(item => item.category === name)){
            setEveryCategoriesSource(prevItens => 
                [ ...prevItens, {category:name, count: 0, icon:icon, color: color || "white", colorNameCategory: colorNameCategory || "default"}]
            )
        }
        // if there already is
        else if(name !== ""){
            setEveryCategoriesSource(prev => prev.map(item =>
                item.category === name ?
                    { ...item, category:name, icon:icon, color:color, colorNameCategory: colorNameCategory} :
                    item
                )
            )
        }
    }
    // edit category
    const editCategory = (id, name, icon, color, colorName) => {
        if(name !== ""){
            setEveryCategoriesSource(prev => prev.map(item =>
                item.category === id ?
                    { ...item, category:name, icon:icon, color:color, colorName:colorName} :
                    item
                )
            )
        }
        else{
            alert("error")
        }
    }

    return (
        <CategoriesContext.Provider 
                                value={{
                                    everyCategoriesSource, 
                                    setEveryCategoriesSource, 
                                    currentCategory, 
                                    changeCategory, 
                                    changeCategoryNote, 
                                    addNewCategory, 
                                    editCategory, 
                                    categoryColors, 
                                    categoryIcons
                                }}>
            {children}
        </CategoriesContext.Provider>
    )
}


export default CategoriesProvider;