package backend.projects;


import com.jayway.restassured.RestAssured;
import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import static com.jayway.restassured.RestAssured.given;
import static org.testng.Assert.assertTrue;
public class Create {

    @BeforeTest(groups = {"functional", "backend"})
    public void login() {
        RestAssured.baseURI = "https://dev-interviewer.herokuapp.com/";
        String IssueKey = "";
    }


    @Test(groups = {"functional", "backend"})
    public void createPro() throws InterruptedException {

        //IssueKey =
                        given().
                        header("Content-Type", "application/json").
                      //  body("1").
                        when().
                        post("api/v1/projects/").
                        then().
                        statusCode(200).
                        extract().path("key");
                     //   extract().response();
       // Assert.assertEquals(,);
      //  System.out.println(IssueKey);
    }
}
