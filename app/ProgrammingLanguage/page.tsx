import '../css/programming_languages.css';
export default function ProgrammingLanguages() {
    return <div className = "ProgrammingLanguages">
		<div className="progLangGrid">
		
		
			<div className="TitleRow">
				<div id="Title1">Language</div>
				<div id="Title2"> Proficiency*</div>
				<div id="Title3">Related Skill</div>
			</div>
		
			<div className="blobRow1">
				<div id="ProgLang">
					C++
				</div>
				<div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div>
				<div id="tagColumn">
				<div className = "tag1" > Object Oriented Programming</div> <div className = "tag2">Data Processing</div> 
				</div>
			</div>
			
			
			<div className="blobRow1">
				<div id="ProgLang">
					Python
				</div>
				<div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div>
				<div id="tagColumn">
				<div className = "tag2">Data Processing</div> <div className = "tag1" > Object Oriented Programming</div> 
				</div>
			</div>
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						HTML, CSS
					</div>
					<div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div>
					
					<div id="tagColumn">
					<div className = "tag1" > Web-Development</div> <div className = "tag2">UI/UX</div>
					</div>
				</div>
			</div>
			<div>
				<div className="blobRow1">
					<div id="ProgLang" style={{marginRight: '100px'}}>
						Javascript
					</div>
					
					<div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div>
					
					<div id="tagColumn">
					<div className = "tag1" > Web-Development</div> <div className = "tag2">UI/UX</div> <div className= "tag3"> APIs</div>
					</div>
				</div>
			</div>
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						Visual Basic
					</div>
					<div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div>
					
					
					<div id="tagColumn">
					<div className = "tag2" > Data Processing</div> <div className = "tag3">Data management</div>
					</div>
				</div>
			</div>
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						XML
					</div>
					
					<div className="blob"></div> <div className="blob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div>
					
					
					<div id="tagColumn">
					<div className = "tag1" > Web-Development</div>
					</div>
				</div>
			</div>
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						JSON
					</div>
					<div className="blob"></div> <div className="blob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div>
					
					
					<div id="tagColumn">
					<div className = "tag1" > Web-Development</div><div className= "tag3"> APIs</div>
					</div>
				</div>
			</div>
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						PHP
					</div>
					<div className="blob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div>
					
					<div id="tagColumn">
					<div className = "tag1" > Web-Development</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						SQL
					</div>
					<div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="Emptyblob"></div>
					
					<div id="tagColumn">
					<div className = "tag1" > Web-Development</div> <div className = "tag2">Data Processing</div> <div className= "tag3"> Data management </div>
					</div>
				</div>
			</div>
			
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						Latex
					</div>
					<div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="blob"></div> <div className="Emptyblob"></div>
					
					<div id="tagColumn">
					<div className = "tag1" > Mark-up Language</div>
					</div>
				</div>
			</div>
			
			<div>
				<div className="blobRow1">
					<div id="ProgLang">
						Verilog
					</div>
					<div className="blob"></div> <div className="blob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div> <div className="Emptyblob"></div>
					
					<div id="tagColumn">
					<div className = "tag1" > HDL</div>
					</div>
				</div>
			</div>
		</div>
		<h3>
			*Relative proficiency, 5 being the one I find myself using the most and the rest are relative to that. Generally, I think that the languages I have learned are not as important as the skills and concepts I learned through the language. I expect this list to 
			continue to grow throughout my career, because each language has its strengths. At the end of the day, the goal of the project is what dictates the language to use. For instance this website was made with basic HTML and CSS, becuase I wanted the freedom
			to define the styling. For processing data, I would prefer SQL, but if the infrastructure for sql is not there and the data to be processed fits on excel, and the tool is for a person without a computer science background, then I would most likely use VBA, 
			because it is the fastest way for me to create a simple interface to process data. Then, some upcoming projects call for Node.js and not javascript, JSON and not XML (spotify api), then for my ecommerce site, for security reasons  
			its best to use a content manager (no code) because it has the infrastructure for ecommerce set up. In sum, its not the language but rather the skill/concepts learned through it. 
		</h3>



</div>
}
