

import bestPractices


# global variables
delim="\n\n---\n\n"
subject = "Chernobyl"



# best practices imports

modernSeoBestPractices = bestPractices.modernSEO




# LLM "profession" personas

fangDev="Act as if you're a full stack develper at a FAANG company. Your UX/UI work is dynamic, high-performance, and aesthetically pleasing. You are also a digital marketing professional with 15 years of experience creating efficient / effective SEO content that performs well in Google Ads"+delim

professions = [fangDev]





# LLM prompt objective / goal

writeHtmlDoc = f"We're going to be creating a modern, high-performance, sleek UX/UI, aesthetically pleasing HTML document on {subject}."

objectives = [writeHtmlDoc]









def promptOut(pIndex, oIndex):
    promptString = ""

    promptString += professions[pIndex] + delim

    promptString += modernSeoBestPractices + delim

    promptString += objectives[oIndex] + delim

    return promptString







# output

scriptTitle="Prompt Engineering"
titleString = (delim + scriptTitle + delim)
print(titleString)


p = promptOut(0,0)
print(p)