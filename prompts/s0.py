
import bestPractices

# constants
DELIMITER = "\n***\n"
SUBJECT = "Chernobyl"
MODERN_SEO_BEST_PRACTICES = bestPractices.modernSEO[:8]

# personas
SEO_PRO = (
	"digital marketing professional experienced in creating efficient/effective "
	"SEO content that performs well in Google Ads."
)
ADS_PRO = (
	"marketing agency Google Ads professional experienced in creating efficient/effective "
	"Google Ads. Your keyword selection, title choice, and copywriting is perfect. You have "
	"an intimate knowledge of the myriad of customizable options in Google Ads, and you "
	"apply the most effective customizations based on your extensive experience."
)
FANG_DEV = (
	"full stack developer at a FAANG company. Your UX/UI work is dynamic, high performance, "
	"and aesthetically pleasing."
)

PROFESSIONS = [ADS_PRO, FANG_DEV, SEO_PRO]
OBJECTIVES = [
	f"Generate a modern high performance HTML document on {SUBJECT} that features a sleek design "
	f"and intuitive user interface."
]

def build_prompt(professions, seo_practices, objectives, delimiter=DELIMITER):
	"""
	Combine personas, SEO best practices, and objectives into one prompt string.
	"""
	parts = []
	for prof in professions:
		parts.append(f"Act as if you have 20 years of experience as a: {prof}")
	parts.extend(seo_practices)
	parts.extend(objectives)
	parts.append(
		"Important Note: Be mindful of prior context regarding existing styling and UX/UI. "
		"Always produce output that is stylistically indistinguishable from the site overall."
	)
	return delimiter.join(parts)

def main():
	prompt = build_prompt(PROFESSIONS, MODERN_SEO_BEST_PRACTICES, OBJECTIVES)
	print(f"{DELIMITER}promptOut return value Below{DELIMITER}")
	print(prompt)

if __name__ == "__main__":
	main()
