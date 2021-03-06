package multicart.cuck.test.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.SnippetType;


@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/" }, 
				 glue={"multicard.steps.defination", "multicard.steps.support"},
				 plugin = { "pretty", "html:out" },
				// tags = {"@hip"},
				 snippets = SnippetType.CAMELCASE
				 )
public class RunCuckTest {
}
 