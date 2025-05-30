

import bestPractices


# lambda functions

write_html_doc = lambda subject: f"Generate a modern high performance HTML document on {subject} that features a sleek design and intuitive user interface."




# global variables
delim="\n---\n"
subject = "Chernobyl"



# best practices imports

modernSeoBestPractices = bestPractices.modernSEO[0:8]




# LLM "profession" personas

seoPro="digital marketing professional experienced in creating efficient / effective SEO content that performs well in Google Ads."

adsPro="marketing agency Google Ads professional experienced in creating efficient / effective Google Ads. Your keyword selection, title choice, and copywriting is perfect. You have an intimate knowledge of the myriad of customizable options in Google Ads, and you apply the most effective and relevant customizations based on your extensive knowledge."

fangDev="full stack develper at a FAANG company. Your UX/UI work is dynamic, high-performance, and aesthetically pleasing."

professions = [adsPro, fangDev, seoPro]





# LLM prompt objective / goal

htmlPageRequest = write_html_doc(subject)

objectives = [htmlPageRequest]






def getPromptStrings(promptStringIndex, promptList):

    promptString = promptList[promptStringIndex]

    return promptString




def promptOut(pIndices, oIndices):
    promptString = ""


    #promptString += "Act as if you have 20 years of experience as a: "
    #promptString += professions[pIndex] + delim

    for pIndex in pIndices:
        getProfession = getPromptStrings(pIndex, professions)
        promptString += "Act as if you have 20 years of experience as a: " + getProfession + delim


    # add global SEO best practices to prompt string
    promptString += modernSeoBestPractices + delim


    for oIndex in oIndices:
        getObjective = getPromptStrings(oIndex, objectives)
        promptString += getObjective


    #promptString += getPromptStrings(oIndices, objectives)


    promptString += "\n\nImportant Note: Be mindful of prior context regarding existing styling and UX/UI. Always produce material that is stylistically indistinguishable from the site overall."

    promptString += "\n\n"

    return promptString



#p = promptOut([0:2],[0])
pLen = list(range(0,len(professions)))
oLen = list(range(0,len(objectives)))

p = promptOut(pLen,oLen)




# output

print(delim + "promptOut return value Below" + delim)


print(p)