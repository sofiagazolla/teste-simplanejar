import { AboutResult } from "@/components/pages/financial-health/about_result";
import { StepsResults } from "@/components/pages/financial-health/steps_result";
import { Book } from "@/components/pages/financial-health/book";
import Test  from "@/components/pages/financial-health/test";

export default function financialHealth(){
    return(
        <>  
            <Test/>
            <AboutResult/>
            <StepsResults/>
            <Book/>
        </>
    );
}